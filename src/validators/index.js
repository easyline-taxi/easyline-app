import * as Yup from "yup";

export class Validator {
  static yupSchema;
  static yupSchemaData;

  async handleYupSchemaData(schemaData, validatingData) {
    this.yupSchemaData = { ...this.yupSchemaData, ...schemaData };

    this.yupSchema = Yup.object().shape({
      ...this.yupSchemaData,
    });

    this.allValidatingData = { ...this.allValidatingData, [validatingData.name]: validatingData.value };
  }

  constructor() {
    this.yupSchema = Yup.object();
    this.yupSchemaData = {};
    this.allValidatingData = {};
    this.errors = [];

    this.isEmail = (validatingData, msg) => {
      const email = {
        [validatingData.name]: Yup.string()
          .email()
          .required(msg || "Campo requerido."),
      };
      this.handleYupSchemaData(email, validatingData);
    };

    this.isString = (validatingData, msg) => {
      const str = {
        [validatingData.name]: Yup.string()
          .min(validatingData.min || 0)
          .max(validatingData.max || Number.MAX_SAFE_INTEGER)
          .required(msg || "Campo requerido"),
      };
      this.handleYupSchemaData(str, validatingData);
    };

    this.clearAll = () => {
      this.yupSchema = Yup.object();
      this.yupSchemaData = {};
      this.allValidatingData = {};
      this.errors = [];
    };

    this.getErrors = () => {
      return this.errors;
    };

    this.isValid = async () => {
      try {
        const valid = await this.yupSchema.validate(this.allValidatingData, { abortEarly: false });
        return valid;
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            this.errors[error.path] = error.message;
          });
        } else {
          this.errors = err;
        }
        throw err;
      }
    };
  }
}

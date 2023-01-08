/**
 * A functional react component for rendering a text input.
 *
 * @param {InputProps} props - The input props object.
 * @param {string} props.name - The name of the input element.
 * @param {string} [props.label] - The label of the input element.
 * @param {string} [props.help] - The help text of the input element.
 * @param {any} props.register - A function that registers the input element.
 * @param {object} [props.errors] - An object containing the validation errors of the input element.
 * @param {boolean} [props.required=false] - A boolean indicating whether the input is required.
 * @param {boolean} [props.disabled=false] - A boolean indicating whether the input is disabled.
 * @param {string} [props.type='text'] - The type of the input element.
 * @param {string} [props.type='inputMode'] - The inputMode of the input element.
 * @param {string} [props.placeholder] - The placeholder text of the input element.
 * @param {string} [props.defaultValue] - The default value of the input element.
 * @param {object} [props.validationSchema] - An object containing the validation rules for the input element.
 */

interface InputProps {
  name: string;
  label?: string;
  help?: string;
  register: any;
  errors?: object;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  inputMode?: string;
  placeholder?: string;
  defaultValue?: string;
  validationSchema?: object;
}

const Input = ({ ...props }: InputProps) => {
  const {
    name,
    label,
    help,
    register,
    errors,
    required,
    type,
    inputMode,
    placeholder,
    defaultValue,
    validationSchema,
  } = props;

  return (
    <div className="my-6">
      {label && (
        <label htmlFor={name} className="block text-sm">
          {label}
        </label>
      )}

      <div className="my-2">
        <input
          name={name}
          type={type}
          inputMode={inputMode}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register(name, validationSchema)}
          className="block w-full appearance-none rounded border border-dark bg-darker px-3 py-2 placeholder-light shadow-sm ring-1 ring-dark focus:border-dark focus:outline-none focus:ring-light sm:text-sm"
        />

        {help && <p className="pt-1 text-xs text-light">{help}</p>}

        {errors && errors[name]?.type === "required" && (
          <p className="pt-1 text-xs text-red-400/75">
            {errors[name]?.message}
          </p>
        )}

        {errors && errors[name]?.type === "minLength" && (
          <p className="pt-1 text-xs text-red-400/75">
            {errors[name]?.message}
          </p>
        )}

        {errors && errors[name]?.type === "pattern" && (
          <p className="pt-1 text-xs text-red-400/75">
            {errors[name]?.message}
          </p>
        )}

        {errors && errors[name]?.type === "custom" && (
          <p className="pt-1 text-xs text-red-400/75">
            {errors[name]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;

Input.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
};

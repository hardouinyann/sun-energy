export interface InputProps {
    modelValue?: string | number;
    icon?: string;
    label: string;
    required?: boolean;
    validator?: (model?: string | number) => boolean;
    type?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
}
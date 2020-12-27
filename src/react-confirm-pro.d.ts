declare module 'react-confirm-pro' {
  export type ReactConfirmProCustomUIOptions = {
    onClose?: () => void;
    onCancel: () => void;
    onSubmit: () => void;
  }

  export type ReactConfirmProProps = | {
    // Default using without body, customUI and custom buttons
    duration?: number;
    delay?: number;
    animate?: {
      in?: string;
      out?: string;
    };
    className?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
    keyboardEvents?: {
      escape?: boolean;
      submit?: boolean;
    };
    customUI?: never;
    body?: never;
    buttons?: never;
    title?: string|React.ReactNode;
    description?: string|React.ReactNode;
    onSubmit?: () => void;
    onCancel?: () => void;
    closeButton?: React.ReactNode;
    type?: "dark"|"light";
    btnCancel?: string;
    btnSubmit?: string;
  } | {
    // Using with custom buttons
    duration?: number;
    delay?: number;
    animate?: {
      in?: string;
      out?: string;
    };
    className?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
    keyboardEvents?: {
      escape?: boolean;
      submit?: boolean;
    };
    customUI?: never;
    body?: never;
    buttons?: (options: ReactConfirmProCustomUIOptions) => React.ReactNode[];
    title?: string|React.ReactNode;
    description?: string|React.ReactNode;
    onSubmit?: () => void;
    onCancel?: () => void;
    closeButton?: React.ReactNode;
    type?: "dark"|"light";
    btnCancel?: never;
    btnSubmit?: never;
  } | {
    // Using with body
    duration?: number;
    delay?: number;
    animate?: {
      in?: string;
      out?: string;
    };
    className?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
    keyboardEvents?: {
      escape?: boolean;
      submit?: boolean;
    };
    customUI?: never;
    body?: React.ReactNode[];
    buttons?: never;
    title?: never;
    description?: never;
    onSubmit?: () => void;
    onCancel?: () => void;
    closeButton?: React.ReactNode;
    type?: "dark"|"light";
    btnCancel?: never;
    btnSubmit?: never;
  } | {
    // Using with customUI
    duration?: number;
    delay?: number;
    animate?: {
      in?: string;
      out?: string;
    };
    className?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
    keyboardEvents?: {
      escape?: boolean;
      submit?: boolean;
    };
    customUI?: (options: ReactConfirmProCustomUIOptions) => React.ReactNode;
    body?: never;
    buttons?: never;
    title?: never;
    description?: never;
    onSubmit?: () => void;
    onCancel?: () => void;
    closeButton?: never;
    type?: "dark"|"light";
    btnCancel?: never;
    btnSubmit?: never;
  }

  export function onConfirm(options: ReactConfirmProProps): void;

  export default class ReactConfirmPro extends React.Component<ReactConfirmProProps> {};
};

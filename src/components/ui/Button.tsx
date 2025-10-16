import React from 'react';
import { Link } from 'react-router-dom';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-1 hover:shadow-lg',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        outline: 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
        ghost: 'hover:bg-secondary text-text',
      },
      size: {
        default: 'h-11 px-8',
        sm: 'h-9 px-4',
        lg: 'h-12 px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  to?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, to, children, ...props }, ref) => {
    const Comp = to ? Link : 'button';
    // @ts-ignore
    return <Comp to={to} className={buttonVariants({ variant, size, className })} {...props}>{children}</Comp>;
  }
);

export default Button;

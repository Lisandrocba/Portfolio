import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { IconName } from '../../icons/index.ts'
import { Icon } from '../Icon/Icon.tsx'
import styles from './Button.module.css'

type ButtonBaseProps = {
  /** Estilo visual. `primary`: relleno claro ("Explorar perfil"). `secondary`: contorno ("GitHub", "Ver CV"…). */
  variant?: 'primary' | 'secondary'
  /** Icono de Figma que acompaña al texto. */
  icon?: IconName
  /** Posición del icono respecto del texto. */
  iconPosition?: 'start' | 'end'
  /** Texto visible del botón. */
  children: ReactNode
}

type NativeButtonProps = Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps | 'aria-pressed'>
type NativeAnchorProps = Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps>

export type ButtonAsButtonProps = ButtonBaseProps &
  NativeButtonProps & {
    href?: undefined
    /** Botón de alternancia (filtros). Aplica `aria-pressed` y el estilo de acento cuando es `true`. */
    pressed?: boolean
  }

export type ButtonAsLinkProps = ButtonBaseProps &
  NativeAnchorProps & {
    /** Si se indica, el componente se renderiza como enlace `<a>`. */
    href: string
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

/**
 * Acción con forma de píldora (48 px de alto) de Figma: botones "Acción", filtros y "Volver al inicio".
 * Se renderiza como `<button type="button">` o, con `href`, como `<a>`.
 */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = 'secondary', icon, iconPosition = 'end', children, className, ...anchorProps } = props
    return (
      <a {...anchorProps} className={buttonClassName(variant, className)}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>{children}</ButtonContent>
      </a>
    )
  }

  const { variant = 'secondary', icon, iconPosition = 'end', children, className, pressed, type = 'button', ...buttonProps } = props
  return (
    <button {...buttonProps} type={type} aria-pressed={pressed} className={buttonClassName(variant, className)}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>{children}</ButtonContent>
    </button>
  )
}

function buttonClassName(variant: 'primary' | 'secondary', className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(' ')
}

type ButtonContentProps = Pick<ButtonBaseProps, 'icon' | 'children'> & { iconPosition: 'start' | 'end' }

function ButtonContent({ icon, iconPosition, children }: ButtonContentProps) {
  return (
    <>
      {icon && iconPosition === 'start' && <Icon name={icon} />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} />}
    </>
  )
}

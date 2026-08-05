import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
  children: ReactNode;
};

export function navigate(to: string) {
  if (window.location.pathname !== to) {
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Link({ to, activeProps, activeOptions, className, onClick, children, ...props }: LinkProps) {
  const isActive = activeOptions?.exact ? window.location.pathname === to : window.location.pathname === to || window.location.pathname.startsWith(`${to}/`);
  const activeClassName = isActive ? activeProps?.className : undefined;
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target) return;
    event.preventDefault();
    navigate(to);
  }
  return <a href={to} className={[className, activeClassName].filter(Boolean).join(" ")} onClick={handleClick} {...props}>{children}</a>;
}

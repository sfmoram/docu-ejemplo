import React, { CSSProperties, type ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import LinkSVG from "@site/static/svg/link.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type HyperLinkProps = {
  bold?: boolean;
  children: ReactNode;
  link: string;
  openWindow?: boolean;
  wrapperClassName?: string;
  wrapperStyle: CSSProperties;
};

export default function HyperLink({
  bold = false,
  children,
  link,
  openWindow = false,
  wrapperClassName,
  wrapperStyle,
}: HyperLinkProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <span
      style={wrapperStyle}
      className={clsx(styles.linkWrapper, wrapperClassName)}
    >
      <Link to={openWindow ? siteConfig.url + link : link}>
        <span className={clsx(styles.textArea, bold && styles.textBold)}>
          {children}
          {openWindow && (
            <span className={styles.linkSVG}>
              <LinkSVG />
            </span>
          )}
        </span>
      </Link>
    </span>
  );
}

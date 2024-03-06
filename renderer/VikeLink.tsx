import {usePageContext} from './usePageContext';

export {VikeLink};

function VikeLink(props: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');
  return <a {...props} className={className} />;
}

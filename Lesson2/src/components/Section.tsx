import { ReactNode } from "react";
type SectionProp = {
  title?: string;
  children: ReactNode;
};

export const Section1 = ({
  children,
  title = "My SubHeading",
}: SectionProp) => {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{children}</p>
      </section>
    </>
  );
};

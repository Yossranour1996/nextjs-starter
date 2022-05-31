import * as React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

export const Card = (props) => {
  return (
    <Link href={props.url ?? "/"}>
      <a data-sb-field-path={props["data-sb-field-path"]} className="card">
        <h3 className="card-heading" data-sb-field-path=".heading">
          {props.heading}
        </h3>
        {props.subheading && (
          <Markdown
            className="card-subheading"
            data-sb-field-path=".subheading"
          >
            {props.subheading}
          </Markdown>
        )}
      </a>
    </Link>
  );
};

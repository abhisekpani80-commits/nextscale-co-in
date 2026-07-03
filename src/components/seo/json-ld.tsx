/**
 * Renders one or more schema.org objects as a JSON-LD <script>. Server-only;
 * the markup lands in the initial HTML so crawlers and LLMs read it without JS.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const data = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {data.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          // schema is built from our own static data — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

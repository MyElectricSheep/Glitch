import React, { useState, useRef, useEffect } from "react";

const SvgLoader = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);
  console.log(name);
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`./images/${name}.svg`)
        ).ReactComponent;
      } catch (err) {
        // @todo:
        // Implement error handling logic,
        // throwing error for the sake of simplicity for now
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default SvgLoader;

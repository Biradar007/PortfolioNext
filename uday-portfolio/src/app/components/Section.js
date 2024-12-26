const Section = ({ title, children }) => {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="bg-gray-100 p-6 rounded-lg">{children}</div>
      </section>
    );
  };
  
  export default Section;
  
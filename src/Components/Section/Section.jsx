// import s from './Section.module.css';

const Section = ({ children, label }) => {
  return (
    <section>
      <h1>{label}</h1>
      {children}
    </section>
  );
};

export default Section;

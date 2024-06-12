import { MotionSection } from "@/lib/MotionComponents";
import { slideIn } from "@/utils/animations";

const Imprint = () => {
  return (
    <MotionSection
      className="mx-auto my-8 max-w-7xl rounded-lg border-t-2 bg-base-300 bg-opacity-10 p-8 shadow-lg shadow-primary sm:p-16"
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-10 text-3xl">Impressum</h1>

        <p>
          Pascal Morgan
          <br />
          Richardstr. 99
          <br />
          12043 Berlin
        </p>

        <h2 className="mb-8 mt-10 text-2xl">Kontakt</h2>
        <p className="mb-8 text-center">
          Telefon: 030 74923373
          <br />
          E-Mail: pascaliscoding@gmail.com
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <div className="text-center">
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </p>
        </div>
      </div>
    </MotionSection>
  );
};
export default Imprint;

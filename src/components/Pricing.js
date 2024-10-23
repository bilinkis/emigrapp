import Buy from "./Buy";

const Pricing = ({ route, suggested, setPaid }) => {
  return (
    <section
      id="pricing"
      className="py-16 pt-24 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
    >
      <div className="container mx-auto text-center">
        {route !== "/diagnostico" && (
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
        )}

        <div className="flex flex-wrap justify-center">
          {suggested !== "invalid" && (
            <div className="flex flex-col items-center p-4 w-1/2">
              <div className="pricing-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col">
                <p className="text-xl mb-4">
                  Nuestro plan ideal para tu proceso migratorio
                </p>
                <p className="text-2xl font-bold mb-4">
                  $500 + €100 de arancel consular
                </p>
                <ul className="text-gray-600 flex-grow">
                  <li className="mb-2">
                    ✓ Todas las funcionalidades de Emigrapp
                  </li>
                  <li className="mb-2">
                    ✓ Solicitud de NIE y Ciudadanía (si contas con la
                    documentación requerida)
                  </li>
                  <li className="mb-2">
                    ✓ Soporte durante todo tu proceso migratorio
                  </li>
                </ul>
                <Buy setPaid={setPaid} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

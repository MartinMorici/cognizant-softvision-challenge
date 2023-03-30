function App() {
  const steps = [
    { step: 'Entrevista Inicial', candidates: [{
      id:1,
      name: 'jhon',
      step: 'Entrevista Inicial'
    }] },
    { step: 'Entrevista Técnica', candidates: [] },
    { step: 'Oferta', candidates: [] },
    { step: 'Asignación', candidates: [] },
    { step: 'Rechazo', candidates: [] },
  ];

  return (
    <div className='App h-screen flex items-center justify-center bg-gray-900'>
      <section className='grid grid-cols-5 w-full gap-8 max-w-[1800px] m-auto'>
        {steps.map((step, index) => {
          return (
            <article className=' p-6 shadow-lg rounded-xl bg-white'>
              <h2 className='font-bold text-center mb-5 text-lg'>{step.step}</h2>

              {/* Candidate */}
              <div className='flex justify-between items-center shadow-xl border border-slate-300 p-4 py-6 rounded-lg'>
                <div>
                  <h3 className='font-semibold'>Gonzalo Pozzo</h3>
                  <p className='text-[15px] text-gray-500'>Medio pelo</p>
                </div>
                <div className='flex gap-2'>
                  {index !== 0 && (
                    <button className=' rounded-md h-[25px] px-2 flex justify-center items-center text-[22px] bg-black text-white'>
                      <span className='relative bottom-[2px]'>←</span>
                    </button>
                  )}
                  {index !== steps.length - 1 && (
                    <button className=' rounded-md h-[25px] px-2 flex justify-center items-center text-[22px] bg-black text-white'>
                      <span className='relative bottom-[2px]'>→</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;

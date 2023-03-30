import { useEffect, useState } from 'react';
import IndCandidate from './components/IndCandidate';
export interface Candidate {
  id: string;
  name: string;
  step: string;
  comments: string;
}
export interface Steps {
  step: string;
  candidates: Candidate[];
}

function App() {
  const [showAddCandidate, setShowAddCandidate] = useState<boolean>(false)
  const [steps, setSteps] = useState<Steps[]>([
    {
      step: 'Entrevista Inicial',
      candidates: [],
    },
    { step: 'Entrevista Técnica', candidates: [] },
    { step: 'Oferta', candidates: [] },
    { step: 'Asignación', candidates: [] },
    { step: 'Rechazo', candidates: [] },
  ]);

  const fetchCandidates = async () => {
    const res = await import('./mock/candidates.json');
    const data = res.default;
    const updateSteps = [...steps];
    data.forEach((candidate) => {
      const index = updateSteps.findIndex((step) => candidate.step === step.step);
      updateSteps[index].candidates.push(candidate);
    });

    setSteps(updateSteps);
  };

  const handleDirection = (candidate: Candidate, index: number, direccion:string) => {
    let updateSteps = [...steps];
    updateSteps[index].candidates = updateSteps[index].candidates.filter((cand) => cand.id !== candidate.id)
    if (direccion == "sig") {
      updateSteps[index + 1].candidates.push(candidate);
    } else{
      updateSteps[index - 1].candidates.push(candidate);
    }
    setSteps(updateSteps);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <>
    {showAddCandidate && <div className='absolute inset-0 w-full h-screen bg-[#00000080] flex justify-center items-center z-30'>
       
          <form className='flex flex-col gap-3 items-center pt-4 rounded-lg bg-white w-full max-w-[500px] max-h-[450px] h-full' action="">
            <h2 className='text-center font-bold text-xl mb-2'>Agregar Candidato</h2>
            <label className='font-semibold' ><span className='block mb-1'>ID:</span> <input className='block border border-black w-[350px] h-[35px]' type="text" /></label>
            <label className='font-semibold'><span className='block mb-1'>Nombre:</span> <input className='block border border-black w-[350px] h-[35px]' type="text" /></label>
            <label className='font-semibold'><span className='block mb-1'>Comentario:</span> <textarea className='block border border-black w-[350px] h-full' /></label>
            <button className='mt-auto mb-6 py-2 px-4 rounded-lg bg-black text-white'>Agregar</button>
          </form>
        
      </div>}
      <main className='App h-screen flex items-center justify-center bg-gray-900'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-8 max-w-[1800px] m-auto bg-gray-900 p-3'>
          {steps.map((step, index) => {
            return (
              <article key={index} className='min-h-[400px] p-6 shadow-lg rounded-xl bg-white flex flex-col'>
                <h2 className='font-bold text-center mb-5 text-lg'>{step.step}</h2>
                {steps[index].candidates.map((candidate) => {
                  return (
                    <IndCandidate candidate={candidate}  index={index} handleDirection={handleDirection} steps={steps}></IndCandidate>
                  );
                })}
                {index === 0 && <button className='w-full bg-black rounded-md px-1 py-2 text-white mt-auto ' onClick={() => {setShowAddCandidate(true)}}> Agregar candidato </button> }
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;

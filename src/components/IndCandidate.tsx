import React from 'react';
import { Candidate, Steps } from '../App';

interface IndCandidateProps {
  candidate: Candidate;
  index: number;
  handleDirection: (candidate: Candidate, index: number, pre: string) => void;
  steps: Steps[];
}

const IndCandidate = ({ candidate, index, handleDirection, steps }: IndCandidateProps) => {
  return (
    <div key={candidate.id} className='mb-5 flex justify-between items-center shadow-xl border border-slate-300 p-4 py-6 rounded-lg'>
      <div>
        <h3 className='font-semibold'>{candidate.name}</h3>
        <p className='text-[15px] text-gray-500'>{candidate.comments}</p>
      </div>
      <div className='flex gap-2'>
        {index !== 0 && (
          <button onClick={() => handleDirection(candidate, index, 'pre')} className=' rounded-md h-[25px] px-2 flex justify-center items-center text-[22px] bg-black text-white'>
            <span className='relative bottom-[2px]'>←</span>
          </button>
        )}
        {index !== steps.length - 1 && (
          <button onClick={() => handleDirection(candidate, index, 'sig')} className=' rounded-md h-[25px] px-2 flex justify-center items-center text-[22px] bg-black text-white'>
            <span className='relative bottom-[2px]'>→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default IndCandidate;

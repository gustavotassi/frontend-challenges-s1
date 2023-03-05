import { FormEvent } from 'react';

export default function Personal() {
  function sendData(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <header>
        <h1 className="font-extrabold text-2xl">Personal data</h1>
        <span className="text-sm text-zinc-400">
          Fields marked with * are required
        </span>
      </header>
      <form onSubmit={sendData} className="w-[32rem] h-fit flex flex-col">
        <label htmlFor="name" className="font-bold">
          Full name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="p-2 mt-2 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-zinc-900 focus:outline-none"
          required
        />

        <label htmlFor="email" className="font-bold mt-6">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          className="p-2 mt-2 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-zinc-900 focus:outline-none"
          required
        />

        <label htmlFor="date-of-birth" className="font-bold mt-6">
          Date of birth
        </label>
        <input
          type="date"
          id="date-of-birth"
          className="p-2 mt-2 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-zinc-900 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-fit px-6 py-4 mt-8 rounded-lg font-bold self-end bg-cyan-700 transition-colors hover:bg-cyan-800"
        >
          Next
        </button>
      </form>
    </>
  );
}

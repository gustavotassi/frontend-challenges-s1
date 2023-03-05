import { useNavigation } from '@/services/hooks';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-2xl h-fit p-8 m-6 rounded-lg bg-zinc-900 flex flex-col gap-12">
        <header>
          <span className="text-zinc-500 text-xs font-bold">EP01S1</span>
          <h1 className="font-extrabold text-2xl">Hello, welcome! 👋</h1>
        </header>
        <section className="flex flex-col gap-4">
          <p>
            In this episode, you will encounter a multi step form with multiple
            input fields that conserves its data through steps using{' '}
            <strong>Context</strong> (native from React).
          </p>
          <p>
            The whole form is going to be divided into three different
            pages/topics: personal data, educational data and a generic review,
            exploring various types of input fields.
          </p>
          <p>
            Form validation is done by <strong>zod</strong>, which perfectly
            integrates with Typescript.
          </p>
          <p>
            And as always, we will be using <strong>tailwindcss</strong> for
            styling. 🥰
          </p>
        </section>
        <button
          className="w-fit px-6 py-4 rounded-lg font-bold self-end bg-cyan-700 transition-colors hover:bg-cyan-800"
          onClick={() => navigate('/oo')}
        >
          Okay, let's go!
        </button>
      </div>
    </div>
  );
}

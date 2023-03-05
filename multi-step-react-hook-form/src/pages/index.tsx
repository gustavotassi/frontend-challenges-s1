import { useNavigation } from '@/services/hooks';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <>
      <header>
        <span className="text-zinc-500 text-xs font-medium">
          EP01S1 - REACT MULTI STEP FORM
        </span>
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
          Form validation is done by <strong>zod</strong> with{' '}
          <strong>react-hook-form</strong>, which perfectly integrates with
          Typescript.
        </p>
        <p>
          And as always, we will be using <strong>tailwindcss</strong> and{' '}
          <strong>styled-components</strong> for styling.
        </p>
      </section>
      <button
        className="w-fit px-6 py-4 rounded-lg font-bold self-end bg-cyan-700 transition-colors hover:bg-cyan-800"
        onClick={() => navigate('/personal')}
      >
        Okay, let's go!
      </button>
    </>
  );
}

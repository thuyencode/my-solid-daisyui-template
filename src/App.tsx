import { createSignal, type Component } from 'solid-js'
import solidLogo from './assets/solid.svg'
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg'

const App: Component = () => {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div class='flex items-center justify-center gap-10'>
        <a href='https://vitejs.dev' target='_blank'>
          <img class='logo h-24 w-auto' src={viteLogo} alt='Vite logo' />
        </a>
        <a href='https://solidjs.com' target='_blank'>
          <img
            class='logo solid h-24 w-auto'
            src={solidLogo}
            alt='Solid logo'
          />
        </a>
      </div>
      <h1 class='text-5xl font-bold'>Vite + Solid</h1>
      <div class='space-y-5'>
        <button
          class='btn btn-primary text-base'
          role='button'
          onClick={() => setCount((count) => ++count)}
        >
          Count is {count()}
        </button>
        <p class='text-sm'>
          Edit <code class='kbd kbd-sm'>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class='font-medium'>Click on the Vite and Solid logos to learn more</p>
    </>
  )
}

export default App

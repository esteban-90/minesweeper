import { Board, Top } from '@/components'

export default function App(): JSX.Element {
  return (
    <>
      <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
      </Top>
      <Board time='000' levels={['beginner', 'intermediate', 'expert']} mines='10' reset={() => null} />
    </>
  )
}

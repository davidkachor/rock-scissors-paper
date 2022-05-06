import s from './App.module.scss'
import Rules from "./components/Rules/Rules";
import {useSelector} from "react-redux";

function App() {
    const page = useSelector(state => state.ui.page)

    let content

    switch (page) {
        default: content = <Rules/>
            break
    }

    return <div className={s.container}>
        {content}
    </div>
}

export default App

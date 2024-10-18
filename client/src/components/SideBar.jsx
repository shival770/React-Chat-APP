import Conversations from './Conversations'
import SearchInput from './SearchInput'
import LogOutButton from './LogOutButton'

const SideBar = () => {
    return (
        <div className="flex flex-col border-r border-slate-500 p-4">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogOutButton />
        </div>
    )
}
export default SideBar;
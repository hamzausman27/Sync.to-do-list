
const Header = ({title,onAdd,showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
        
        </header>
    )
}
Header.defaultProps = {
    title : 'sync.',
}
export default Header

import Sidebar from "../sidebar/Sidebar"

function Layout({ children, role }) {
	return (
		<div>
			<Sidebar role={role}/>
			{children}
		</div>
	)
}
export default Layout

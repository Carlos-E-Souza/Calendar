import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className="d-flex h-100 sidebar">
            <h1 className="sidebar-title w-100 h-auto">Schedule</h1>
            <div className="d-flex flex-column">
                <span className="text-sm text-muted">Seg, June 25</span>
                <span className="text-lg text-white">Titulo da Tarefa</span>
                <span className="text-sm text-muted">14:00 - 16:00</span>
            </div>
        </div>
    )
}

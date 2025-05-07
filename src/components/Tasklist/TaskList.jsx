const Tasklist = ({ task, index, handleEdit, handledelete }) => {
  return (
    <div  className="card col-12  col-sm-2 col-md-4 col-lg-3 m-1 text-center justify-content-between" style={{ height: '10em' }} key={index}>
      {task.title}
      <div className="d-flex justify-content-center  p-1 text-center">
        <button className="btn btn-sm btn-warning me-1"
          onClick={() => handleEdit(task.id)}
        >Editar</button>
        <button className="btn btn-sm btn-danger"
          onClick={() => handledelete(task.id)}
        >Deletar</button>
      </div>

    </div>
  )
}

export default Tasklist


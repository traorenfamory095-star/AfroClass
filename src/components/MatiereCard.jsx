const MatiereCard = ({matiere}) => {
  const Icon = matiere.iconMat
  return (
    <div className='text-center flex flex-col items-center bg-card py-7 rounded-xl border border-line'>
      <Icon className="font-bold" style={{color: matiere.couleur}} />
      <p className="font-bold">{matiere.mat}</p>
    </div>
  )
}

export default MatiereCard

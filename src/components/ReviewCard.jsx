

const ReviewCard = ({cours}) => {
    const Icon = cours.Icon
  return (
      <div className='flex gap-4 items-center bg-[#295aa8] rounded-xl px-6 py-2 w-fite mb-4'>
        <Icon style={{color : cours.couleur}} />
        <p className='flex flex-col'>
          <span className='font-semibold'>{cours.chapitre}</span>
          <span className='text-ink'>{cours.matiere} • {cours.Niveau}</span>
        </p>
      </div>
  )
}

export default ReviewCard

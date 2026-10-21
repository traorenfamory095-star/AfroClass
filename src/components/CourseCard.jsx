import { ArrowRight } from "lucide-react"

const CourseCard = ({cours}) => {
  const Icon = cours.Icon
  return (
    <div className="bg-card border border-line p-4 rounded-2xl">
      <div className="flex justify-between">
        <span className="flex items-center gap-1 bg-line text-xs font-bold p-1.5 rounded-lg"><Icon size={15}/>{cours.matiere}</span><span className="bg-acc rounded-lg text-xs flex justify-center items-center px-1.5 font-bold">{cours.Niveau}</span>
      </div>
      <h1 className="font-bold text-lg my-2">{cours.chapitre}</h1>
      <p className="text-mut text-[13px] line-clamp-3">{cours.description}</p>
      <div className="flex justify-between ">
        <span>{} leçons</span>
        <button className="flex gap-1 items-center">Voir le cours <ArrowRight size={12}/></button>
      </div>
    </div>
  )
}

export default CourseCard

 const ShoeCard = ({ imgURL, changeBigShoeImage,bigShoeImg}) => {

const handle = () => {
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
}
    
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handle}>
      
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img 
        src={imgURL.thumbnail}
         width={127}
            height={103}
            alt="collection"
             className="object-contain"
         />
      </div>
    </div>
  )
}

export default ShoeCard

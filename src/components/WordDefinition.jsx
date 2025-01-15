const WordDefinition = ({ data }) => {
  // Ensure data and data[0] are defined before accessing properties
  const phonetic = data && data.length > 0
    ? data[0].phonetic || data[0].phonetics?.find(item => item.text)?.text || "/Phonetic not available/"
    : "/Phonetic not available/";
console.log(data);
  return (
    <>
    {
      data && data.length > 0 && (
        <div className='flex flex-row gap-6 items-center pt-2'>
        <h3 className='text-2xl font-semibold text-red-800'>{data[0].word}</h3>
        <p className='text-gray-500 text-xl'>{phonetic}</p>
        </div>
        )
    }
      {data && data.length > 0 ? (
        data[0].meanings.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 pt-3 font-semibold">Part of Speech: {item.partOfSpeech}</p>

            {item.definitions.length > 0 && (
              <div>
                <p className='text-2xl text-gray-600 font-medium'>Definition:</p>
                {item.definitions.slice(0, 3).map((def, i) => (
                  <p key={i} className='py-1'>&bull; {def.definition}</p>
                ))}
              </div>
            )}

            {item.synonyms.length > 0 && (
              <div>
                <span className='text-xl text-gray-600'>Synonyms: </span>
                  <span> [ {item.synonyms.join(', ')} ]</span>
              </div>
            )}

            {item.antonyms.length > 0 && (
              <div>
                <span className='text-2xl text-gray-600'>Antonyms:</span>
                  <span> [ {item.antonyms.join(', ')} ]</span>
              </div>
            )}
          </div>
        ))
      ) : ""}
    </>
  );
};

export default WordDefinition;
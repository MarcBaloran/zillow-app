 import React, { useState } from "react";
// import { zoopla } from "../../apis/anime-api";
// import { Anime } from "../../models/anime";

// export default function Search() {
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState<Anime[]>([]);

//   return (
//       <div>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchValue}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         <br />
//         <div>
//           {searchResults.map((anime: Anime, key) => {
//             return <React.Fragment key={key}>
//               <div key={key}>
//                 <div>
//                   <img src={anime.image_url} alt="" />
//                 </div>
//                 <div>
//                   <h2>{anime.title}</h2>
//                 </div>
//                 <div>
//                   <h2>{anime.synopsis}</h2>
//                 </div>
//               </div>
//             </React.Fragment>
//           })}
//         </div>
//       </div>
//   );

//   async function handleBlur(event: any) {
//     const animeList = await AnimeApi.searchAnime(event.target.value);
//     console.log("animeList", animeList);

//     const animeByCategories = Array.from(new Set(animeList.map(anime => anime.type)));


//     setSearchResults(animeList);
//   }

// 	function handleChange(event: any) {
// 		setSearchValue(event.target.value);
// 	}
// }
import { useEffect, useCallback, useRef, Ref } from 'react';
import { AppDisptach } from '../../redux/store';
import { fetchBooks, fetchSearchedBooks } from '../../redux/books/booksAsyncThunk';
import { changePageNumber } from '../../redux/books/booksSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// make API calls and pass the returned data via dispatch
import { BooksProps } from '../../redux/types';

export const useFetch = () => {
  const {currentPage: page} = useAppSelector((state) => state.books);
  const {filter, search} = useAppSelector((state) => state.tabFilter)
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if(!["culture", "charactername"].includes(filter)){
      if(!filter){
        dispatch(fetchBooks({page}))
    }else{
      dispatch(fetchSearchedBooks({ filter, search, page }));
    }
  }, [page])
}


// infinite scrolling with intersection observer

export const useInfiniteScroll = (scrollRef: any) => {
  const dispatch = useAppDispatch()

  const scrollObserver = useCallback(
    (node: any) => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            // dispatch({ type: 'ADVANCE_PAGE' });
            dispatch(changePageNumber(0))
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

// lazy load images with intersection observer
// export const useLazyLoading = (itemSelector: string, items: BooksProps[] ) => {
//   const imgObserver = useCallback((node: any) => {
//     const intObs = new IntersectionObserver(entries => {
//       entries.forEach(en => {
//         if (en.intersectionRatio > 0) {
//           const currentItem = en.target;
//           const newItem = currentItem?.dataset?.src;

//           // only swap out the image source if the new url exists
//           if (!newItem) {
//             console.error('Image source is invalid');
//           } else {
//             currentItem.src = newItem;
//           }
//           intObs.unobserve(node);
//         }
//       });
//     })
//     intObs.observe(node);
//   }, []);

//   const itemRef = useRef(null);

//   useEffect(() => {
//     itemRef.current = document.querySelectorAll(itemSelector);

//     if (itemRef.current) {
//       itemRef.current.forEach(img => imgObserver(img));
//     }
//   }, [imgObserver, itemRef, itemSelector, items])
// }

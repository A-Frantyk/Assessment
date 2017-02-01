using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using AssessmentServices.CustomDTO;

namespace AssessmentsWebApi.Pagination
{

    public class Paging<T> where T : class
    {
        public List<T> Items { get; private set; }
        public int Page { get; private set; }
        public int ItemsPerPage { get; private set; }

        public int TotalPages { get; private set; }
        public int Index { get; private set; }
        public int Count { get; private set; }

        public Paging(List<T> items, int page, int itemsPerPage)
        {
            Items = items;
            TotalPages = (int)Math.Ceiling((double)Items.Count / itemsPerPage) - 1;
            Page = (page >= 0 && page <= TotalPages) ? page : 0;
            ItemsPerPage = (itemsPerPage > 0 && itemsPerPage < Items.Count) ? itemsPerPage : Items.Count;
            Index = Page * ItemsPerPage;
            Count = Index + ItemsPerPage > Items.Count ? Items.Count - Page * ItemsPerPage : ItemsPerPage;
        }

        public PagingDTO<T> getContent()
        {
            return new PagingDTO<T>()
            {
                Items = Items.GetRange(Index, Count),
                ItemsCount = Items.Count,
                Page = Page,
                TotalPages = TotalPages,
            };
        }
    }

}
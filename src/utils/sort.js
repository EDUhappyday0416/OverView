export const show_icon = (col,sortColumn) =>{
    if (col.key !== sortColumn ) {      
  
       const el = event.target.closest('th')
       el.classList.add('hovered')
       
       if (col.sortable) {       
           col.sorted = 'desc'
  
    }
     
    }
  
  }
  
  export const hide_icon = (col,sortColumn) =>{
   if (col.key !== sortColumn ){
      const el = event.target.closest('th')
      el.classList.remove('hovered')
      if (col.sortable) {
        col.sorted = null
    }
  
   }
  
  
    
  }
  
  
  export const sort_items = (col,rows) =>{ 
    if (col.sorted === 'asc') {
        rows.sort((a,b) =>(a[col.key] < b[col.key])? 1:-1)
        col.sorted = 'desc'
     
    }
    else {
      rows.sort((a,b) =>(a[col.key] > b[col.key])? 1:-1)
      col.sorted = 'asc'
  
    }
  
  
  }
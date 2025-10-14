/* LEVEL 1: Basic Filtering & Searching
Task 1 — Filter by Status
You have an array of tasks. Write a function getTasks({ status }) 
that returns only tasks matching the given status.*/


const tasks = [
  { id: 1, title: "Write documentation", status: "pending" },
  { id: 2, title: "Fix login bug", status: "completed" },
  { id: 3, title: "Review pull request", status: "pending" },
  { id: 4, title: "Update UI design", status: "in-progress" },
  { id: 5, title: "Deploy new version", status: "completed" },
  { id: 6, title: "Write test cases", status: "pending" },
  { id: 7, title: "Refactor codebase", status: "in-progress" },
];

const getTasks = ({ status }) => {
  return tasks.filter(t => t.status === status);
};

// console.log(getTasks({ status: "pending" }));


/*
Task 2 — Search by Keyword
Write searchUsers({ q }) that returns users whose names contain the 
query string (case-insensitive).*/

const users = [
  { id: 1, name: "Satvik", age: 22, isActive: true },
  { id: 2, name: "Sarthak", age: 25, isActive: false },
  { id: 3, name: "Nikita", age: 23, isActive: true },
  { id: 4, name: "Rohan", age: 28, isActive: false },
  { id: 5, name: "Aarav", age: 21, isActive: true },
];

const searchUsers = ({q}) => {
    return users.filter( u => 
        u.name.toLowerCase().includes(q.toLowerCase())
    );
}
// console.log(searchUsers({q: "Sa"}))

/*LEVEL 2: Multiple Filters + Conditional Logic
Task 3 — Filter Products by Category & Price
Write getProducts({ category, maxPrice }) that returns products matching both filters (if provided).*/

const products = [
  { id: 1, name: "Mouse", category: "accessory", price: 500 },
  { id: 2, name: "Keyboard", category: "accessory", price: 1500 },
  { id: 3, name: "Monitor", category: "display", price: 9000 },
];

const getProducts = ({ category, maxPrice }) => {
    return products.filter(p => 
        p.category === category && p.price < maxPrice
    );
}
// console.log(getProducts({ category: "accessory", maxPrice: 1000 }))

/*Task 4 — Date-based Filtering
Write getEvents({ beforeDate }) that returns all events whose date is before the given one.*/

const events = [
  { id: 1, name: "Hackathon", date: "2025-10-10" },
  { id: 2, name: "Workshop", date: "2025-09-15" },
  { id: 3, name: "Seminar", date: "2025-11-02" },
];


const getEvents = ({beforeDate}) => {
    return events.filter(e => new Date(e.date) <= new Date(beforeDate));
};
// console.log(getEvents({ beforeDate: "2025-10-01" }))

/* LEVEL 3: Sorting, Pagination & Combination Filters
Task 5 — Sort Products
Write sortProducts({ sortBy, order }) that sorts by price or name in ascending or descending order.*/

const sortProducts = ({sortby, order}) => {
  return [...products].sort((a, b)=> {
    let valueA = a[sortby]
    let valueB = b[sortby]

    if(typeof valueA === 'string'){
      valueA = valueA.toLowerCase()
      valueB = valueB.toLowerCase()
    }

    if(order === "desc"){
      if(valueA > valueB) return -1;
      if(valueA < valueB) return 1;
      return 0;
    } else {
      if(valueA > valueB) return 1;
      if(valueA < valueB) return -1;
    }
  })
}
// console.log(sortProducts({sortby:"price", order: "desc"}))

/*Task 6 — Pagination
Write paginateUsers({ page, limit }) that returns only a chunk of users for the requested page. */

const paginateUsers = ({page, limit}) => {
  page = Number(page)
  limit = Number(limit)

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return users.slice(startIndex, endIndex);
}
// console.log("Page 3, limit 2:", paginateUsers({ page: 3, limit: 2 }));


// Task 7 — Combine Filters + Sorting
const getFilteredTasks = ({ status, search, sortBy }) => {
  const filter = tasks.filter(task => {
    const statusMatch = !status || task.status === status;
    const searchMatch = !search || task.title.toLowerCase().includes(search.toLowerCase())
    return statusMatch && searchMatch;
  })

  if(sortBy){
    filter.sort((a, b) => {
      let valueA = a.title.toLowerCase()
      let valueB = b.title.toLowerCase()

      if(sortBy == 'asc'){
        if(valueA < valueB) return -1
        if(valueA > valueB) return 1
      }else{
        if(valueA > valueB) return -1
        if(valueA < valueB) return 1
      }
      return 0;
    })
  }
  return filter
};

// console.log(getFilteredTasks({ status: "pending" }));
// console.log(getFilteredTasks({ search: "write" }));
// console.log(getFilteredTasks({ status: "pending", search: "write", sortBy: "desc" }));

/*LEVEL 4: CRUD-like Logic
Task 8 — Update a User
Write updateUser(id, data) that updates a user’s info and returns the updated user. */
const updateUser = (id, {name}) => {
  let user = users.find(u => u.id === id)
  user.name = name;
  return user
}
// console.log(updateUser(2, {name: "Sarthak Sharma"}))

// Task 9 — Delete by Condition
// Write deleteInactiveUsers() that removes all users where isActive is false and returns the new array.
const deleteInactiveUsers = () => {
  let activeUsers = users.filter(u => u.isActive === true)
  return activeUsers
}
// console.log(deleteInactiveUsers())

/* Task 10 — Add New Task with Auto-ID
Write addTask(newTask) that automatically assigns the next available ID and returns the updated array.*/
const addTask = ({newTask}) => {
  let newId = Math.max(...tasks.map(t => t.id)) + 1
  console.log(newId)

  return [...tasks, {id:newId, title: newTask}]
}
// console.log(addTask({newTask: 'Demo'}))

/*LEVEL 5: Advanced Logic (Real-World Simulations)
Task 11 — Filter + Sort + Paginate Together
getArticles({ category, sortBy, order, page, limit })
→ Filter by category
→ Sort by date or views
→ Return paginated data */

const articles = [
  { id: 1, title: "AI Revolution", category: "tech", views: 500, date: "2025-09-20" },
  { id: 2, title: "Healthy Living", category: "lifestyle", views: 300, date: "2025-08-10" },
  { id: 3, title: "Quantum Computing", category: "tech", views: 800, date: "2025-10-05" },
  { id: 4, title: "Travel Hacks", category: "travel", views: 450, date: "2025-07-18" },
  { id: 5, title: "Cybersecurity Trends", category: "tech", views: 600, date: "2025-09-12" },
  { id: 6, title: "Nutrition Myths", category: "lifestyle", views: 200, date: "2025-06-25" },
];

const getArticles = ({ category, sortBy, order, page, limit }) => {
  let filterCategory = articles.filter(a => a.category === category);
  filterCategory.sort((a, b) => {
    let valueA = sortBy === "date" ? new Date(a[sortBy]) : a[sortBy]
    let valueB = sortBy === "date" ? new Date(b[sortBy]) : b[sortBy]

    if(order === 'desc'){
      if(valueA > valueB) return 1
      if(valueA < valueB) return -1
    } else {
      if(valueA < valueB) return 1
      if(valueA > valueB) return -1
    }
  })

  let startIndex = (page - 1) * limit;
  let endIndex = startIndex + limit;

  return filterCategory.splice(startIndex, endIndex);
}
// console.log(getArticles({ category: "tech", sortBy: "views", order: "desc", page: 1, limit: 2 }));

/*Task 12 — User Analytics Summary

Write getUserSummary(users)
→ Count how many are active/inactive
→ Calculate average age
→ Return an object like: */
const getUserSummary = (users) => {
  let activeUsers = 0;
  let inActiveUsers = 0;
  
  users.forEach((u) => {
    if(u.isActive === true){
      activeUsers++;
    } else if(u.isActive === false){
      inActiveUsers++;
    }
  })

  let sum = users.reduce((acc, curr) => {
    return acc + curr.age
  }, 0)
  let averageAge = sum / users.length;

  return {
    total: users.length,
    activeCount: activeUsers,
    inActiveCount: inActiveUsers,
    averageAge: averageAge,
  }
}
// console.log(getUserSummary(users))

/*Task 13 — Nested Filtering
Given posts with nested comments, write getPostsWithKeyword(keyword) 
that returns posts where any comment includes the keyword. */
const posts = [
  {
    id: 1,
    title: "Learning JavaScript",
    comments: [
      { id: 1, text: "Great tutorial!" },
      { id: 2, text: "I love JS, very useful." },
    ],
  },
  {
    id: 2,
    title: "Healthy Lifestyle",
    comments: [
      { id: 1, text: "Nice article about fitness." },
      { id: 2, text: "I prefer meditation." },
    ],
  },
  {
    id: 3,
    title: "Advanced React Patterns",
    comments: [
      { id: 1, text: "Hooks are amazing." },
      { id: 2, text: "This helped me understand custom hooks." },
    ],
  },
];

const getPostsWithKeyword = (keyword) => {
  return posts.filter(post =>
    post.comments.some(comment =>
      comment.text.toLowerCase().includes(keyword.toLowerCase())
    )
  )
}
console.log(JSON.stringify(getPostsWithKeyword("hooks"), null, 2))
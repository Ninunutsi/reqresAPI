# React + TypeScript + Vite

# Reqres Api

პროექტის შესასრულებლად გამოყენებულია როუტერი, კონტექსტი, local storage, axios, custom hooks, useForm და typescript. სტილებისთვის გამოვიყენე styled components, framer motion და svg compoenens.

### Router 
დაინსტალირებულია react-router-dom. ამ პაკეტიდან გამოვიყენე: CreateBrowserRouter, useNavigate, useLocation, და NavLink.
route-ბის წყობა ჩანს views ფოლდერში index.tsx ფაილში. authentication-ისთვის გამოვიყენე protected route და კონტექსტის მეშვეობით შევამოწმე იუზერი არის თუ არა authenticated. 

### Authentication
token-ს ვინახავ ლოკალ სტორიჯში(api გამართულად არ მუშაობდა, არ მაძლევდა ახალი იუზერების დარეგისტრირების ან დალოგინების საშუალებას, უნდა გამომეყენებინა მხოლოდ ის იმეილები რომლებიც ნაჩვენები იყო წინასწარ. ლოგინზეც და რეგისტრაციაზეც ბრუნდებოდა ზუსტად ერთნაირი რესფონსები. მსგავსი რამის გამო გადავწყვიტე ლოკალ სტორიჯი და არა cookies). რეგისტრაციისა და დალოგინების დროს ვამოწმებ response-ად მოსული ტოკენი ემთხვევა თუ არა უკვე არსებულ ტოკენს ლოკალ სტორიჯში. თუ რომელიმე მათგანისას ტოკენი განმეორდება იუზერს შესაბამისი შეტყობინება ესახება ეკრანზე.

### Context
კონტექსტი გამოვიყენე authentication-ისთვის. მისი მეშვეობით შევზღუდე გარკვეულ გვერდებზე წვდომა. ამისთვის დამჭირდა createContext() ფუნქცია, useContext() ჰუკი და პროვაიდერი. საბოლოოდ, ჩემი აპლიკაცია პროვაიდერში ჩავსვი, რომ კონტექსტის მნიშვნელობები სხვადასხვა გვერდებისთვის ხილული გამეხადა, დამეიმპორტებინა და ასე მეკონტროლებინა იუზერის authentication. შექმნილი მაქვს login-ის, sign up-ის და logout-ის ფუნქციები და მათი მეშვეობით ვანახლებ სთეითს კონტექსტში, რომლის მიხედვითაც დგინდება მომხმარებელს გავლილი აქვს თუ არა authentication და აქვს თუ არა კონკრეტულ გვერდებზე წვდომა.
ასევე რეგისტრაციისას, ფორმსის ხილვადობის მნიშვნელობებიც ნახლდება კონტექქსტით

### Custom hooks
შექმნილი მაქვს ორი ქასთომ ჰუკი რექვესთების გასაგზავნად და მისაღებად.

### Pagination
რექვესთი იგზავნება ყოველთვის როცა იუზერი გადადის ახალ გვერდზე. დეითას გავილტვრა მე რომ არ მომიწიოს.

### table and card view
default-ად თეიბლის განლაგება აქვს მონაცემებს. სტაილდ კომპონენტებისთვის გადაცემული პროპსებით კი იცვლება წყობა შესაბამისად. 

### მონაცემების დეტალური აღწერის გვერდები
კომპონენტებით არის გამოყოფილი მონაცემები. რესურსებისთვის არ არის წაშლის ფუნქციონალი. არის მხოლოდ განახლების. თუ რესურსი არ განახლდა განახლების mode-ში ყოფნის დროს save changes-ზე დაჭერის შემთხვევაში სერვერზე რექვესთი არ იგზავნება, ანალოგიური ლოგიკაა იუზერების შემთხვევაშიც. იმ დამატებით, რომ იუზერების წაშლა შეიძლება ეკრანზე გამოჩენილი მოდალის დადასტურების შემდეგ. წაშლის დასტურის დროს კი იუზერის რედირექტირება კეთდება წინა ფეიჯზე, იმის ილუზიის შესაქმენალდ რომ იუზერი მართლა წაიშალა. (აპი არ ანახლებს იუზერებს, თორემ რექვესთის რესპონს სტატუსი 200ია)

### მონაცემების დამატების გვერდები
იხსნება იმის მიხედვით თუ რა ადგილიდან ხსნისნ მომხმარებელი ამ ფეიჯს. დინამიურობისთვის დამოკიდებულია pathname ზე, რომ შესაბამისი ფორმსი გახსნას იუზერების ან რესურსების დამატებისთვის

### errors
ერორებისთვის ჩასმულია ერორ კომპონენტი, ასევე გამოყენებულია ვაილდქარდ როუტი და დაჰენდლილია ისეთი შემთხვევები როდესაც გარკვეული მიზეზების გამო დეითა არ ჩანს ან როუტი არ იხსნება, ასეთ დროს ვიყენებ სწორ მისამართზე რედაქტირების ფუნქციონალს

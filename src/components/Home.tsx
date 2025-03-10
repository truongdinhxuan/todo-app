import Todo from "../models/todo.model";

const Home = ({ items }: { items: Todo[] }) => {
    return (
        <section>
            <ul>
                {items.map((item: Todo) => (
                    <LiItem data={item} key={item.id} />
                ))}
            </ul>
        </section>
    )
}

const LiItem = ({ data }: { data: Todo }) => {
    const liStyle = data.completed ? "text-green-500": "text-yellow-300";
    return (
        <li className={liStyle}>{data.title}</li>
    )
}

export default Home;
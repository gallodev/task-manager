interface TitleProps {
    name: string;
}

export function Title({ name }: TitleProps) {
    return (
        <div className="mt-5 mb-5 flex-1 text-center">
            <h1 className="text-stone-700 text-4xl">{name}</h1>
        </div>
    )
}
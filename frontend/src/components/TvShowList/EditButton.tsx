type props = {
	isEditing: boolean;
	toggleEdit: () => void;
	editShow: () => void;
	className: string;
};

export function EditButton({
	isEditing,
	className,
	toggleEdit,
	editShow,
}: props) {
	return (
		<>
			{isEditing ? (
				<button
					onClick={async () => {
						await editShow();
						toggleEdit();
					}}
					className={className}
				>
					💾
				</button>
			) : (
				<button onClick={toggleEdit} className={className}>
					✏️
				</button>
			)}
		</>
	);
}

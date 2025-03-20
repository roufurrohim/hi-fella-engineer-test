import './checkbox.scss';

export default function Checkbox({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <label className="rounded-checkbox">
            <input type="checkbox" onChange={onChange} />
            <span className="checkmark"></span>
        </label>
    )
}
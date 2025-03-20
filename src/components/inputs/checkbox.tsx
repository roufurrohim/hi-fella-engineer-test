import styles from '@/styles/checkbox.module.scss';

export default function Checkbox({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <label className={styles['rounded-checkbox']}>
            <input type="checkbox" onChange={onChange} />
            <span className={styles['checkmark']}></span>
        </label>
    )
}
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        
    }

    return (
        <div className='card'>
            <title>loginpage</title>
            <h1 className='brand' > LOG IN </h1>

            <form onSubmit={handleSubmit} className="form">
                <label className="field-label">EMAIL</label>
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@example.com"
                    required
                />

                <label className="field-label">PASSWORD</label>
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                />

                {error && <p className="error-text">{error}</p>}

                <button className="btn-primary" type="submit" disabled={loading}>
                    {loading ? 'CHECKING...' : 'ENTER →'}
                </button>
            </form>

        </div>
    )
}
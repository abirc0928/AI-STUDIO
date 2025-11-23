// SettingsPanel.jsx
import React, { useContext, useEffect, useState } from 'react'
import InputField from './InputField'
import { ImageContext } from '../context'
import { getResolutionFromRatio } from '../utils/getResolutionFromRatio'
import { getRandomNumber } from '../utils/randomSeed'

const SettingsPanel = ({ settingPanel, onSetSettingPanel, btnClick }) => {
    const { models, getModels } = useContext(ImageContext)

    const [settings, setSettings] = useState({ ...settingPanel })

    useEffect(() => {
        getModels()
    }, [])

    useEffect(() => {
        const newSeed = getRandomNumber(1000, 999999);
        const updatedSettings = { ...settings, seed: newSeed };
        setSettings(updatedSettings);
        onSetSettingPanel(updatedSettings);
    }, [btnClick]);

    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Model Selection */}
                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">Model</label>
                    <select
                        id="model"
                        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        value={settings.model}
                        onChange={(e) =>
                            setSettings(prev => ({ ...prev, model: e.target.value }))
                        }
                    >
                        {models.map((item) => (
                            <option className="bg-zinc-900" key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                {/* Input Fields */}
                <InputField
                    id="seed"
                    label="Seed (for reproducible results)"
                    type="number"
                    placeholder="Random"
                    value="Random"
                    disabled={true}
                />
                <InputField
                    id="width"
                    label="Width"
                    type="number"
                    value={settings.width}
                    onChange={(e) =>
                        setSettings(prev => ({ ...prev, width: e.target.value }))
                    }
                />
                <InputField
                    id="height"
                    label="Height"
                    type="number"
                    value={settings.height}
                    onChange={(e) =>
                        setSettings(prev => ({ ...prev, height: e.target.value }))
                    }
                />

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
                    <div className="flex flex-wrap gap-2">
                        {["1:1", "16:9", "4:3", "3:2"].map((ratio) => (
                            <button
                                key={ratio}
                                className="bg-zinc-900/10 px-3 py-3 text-xs hover:bg-zinc-800 rounded transition-colors cursor-pointer"
                                onClick={() => {
                                    const { width, height } = getResolutionFromRatio(ratio);
                                    setSettings((prev) => ({
                                        ...prev,
                                        width,
                                        height
                                    }));
                                }}
                            >
                                {ratio}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPanel

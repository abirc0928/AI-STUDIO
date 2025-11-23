// ImageGenaratePage.jsx
import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Glow from '../components/Glow';
import SearchInput from '../components/SearchInput';
import SettingsPanel from '../components/SettingsPanel';
import ImageGrid from '../components/ImageGrid';
import { ImageContext } from '../context';
import { OrbitProgress } from 'react-loading-indicators';
import LoadingModal from '../components/LoadingModal';
import { getRandomNumber } from '../utils/randomSeed';
import ConfirmModal from '../components/ConfirmModal';

const ImageGenaratePage = () => {
    const [prompts, setPrompts] = useState('');
    const [btnClick, setBtnClick] = useState(0);
    const { getImage, images, imageError, loading } = useContext(ImageContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [settingPanel, setSettingPanel] = useState({
        model: 'flux',
        seed: getRandomNumber(1000, 99999),
        width: '1024',
        height: '1024',
    });

    useEffect(() => {
        if (imageError) {
            setModalIsOpen(true);
        }
    }, [imageError]);

    useEffect(() => {
        if (!prompts) return;

        const timer = setTimeout(() => {
            const baseUrl =
                `https://image.pollinations.ai/prompt/${encodeURIComponent(prompts)}?width=${settingPanel.width}&height=${settingPanel.height}&seed=${settingPanel.seed}&model=${settingPanel.model}`;

            getImage(baseUrl);
        }, 300);

        return () => clearTimeout(timer);
    }, [prompts, settingPanel]);


    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <Header />
            <Glow />

            <main className="relative z-10">
                <h2 className="text-4xl font-bold mb-8">
                    Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
                </h2>

                <SearchInput
                    onPromptsHandeler={setPrompts}
                    setButtonClick={setBtnClick}
                    btnClick={btnClick}
                />

                <SettingsPanel
                    prompts={prompts}
                    onSetSettingPanel={setSettingPanel}
                    btnClick={btnClick}
                    settingPanel={settingPanel}
                />

                {/* Loading Modal */}
                {loading && (
                    <LoadingModal>
                        <OrbitProgress
                            variant="spokes"
                            dense
                            color="#b239bf"
                            size="large"
                            text="Loading..."
                            textColor="#ffffff"
                        />
                    </LoadingModal>
                )}

                {/* Image Grid */}
                <ImageGrid images={images} emptyMessage="No images generated yet." />

                {/* Reusable ConfirmModal used for error message */}
                <ConfirmModal
                    open={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    title="Something went wrong"
                    message={imageError || 'Failed to generate image.'}
                    cancelLabel="Close"
                    showConfirm={false}
                />
            </main>
        </div>
    );
};

export default ImageGenaratePage;

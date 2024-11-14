import React from "react";

export default function Members() {
  return (
    <div className="pb-40 px-10 pt-24">
      <p className="text-4xl font-bold">Membros da Liga</p>
      <div className="glass-dark w-full rounded-xl p-4 flex flex-col gap-4 mt-6">
        <p className="text-2xl font-bold">Diretoria</p>
        <div className="overflow-x-auto flex w-full gap-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div className="text-center">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="font-bold text-xl">Fulano de tal</p>
              <p className="text-lg">Diretor</p>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-dark w-full rounded-xl p-4 flex flex-col gap-4 mt-6">
        <p className="text-2xl font-bold">Membros</p>
        <div className="overflow-x-auto flex w-full gap-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div className="text-center">
              <div className="avatar">
                <div className="w-28 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="font-bold text-md">Fulano de tal</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

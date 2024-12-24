"use client";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteConfirmationDialog = ({ isOpen, onClose, onConfirm, customMessage }) => {
    const handleConfirm = () => {
        // Perform some actions here
        console.log("Performing some actions...");
        onConfirm();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-red-100 border-red-400 text-red-900">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        {customMessage || "This action cannot be undone. Data will be permanently deleted."}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteConfirmationDialog;
